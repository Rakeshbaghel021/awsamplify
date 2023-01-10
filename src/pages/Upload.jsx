import React, { useEffect, useRef, useState } from "react";
import AppLayout from "../components/layout/Applayout";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Amplify, Auth, Storage } from "aws-amplify";

const Upload = () => {
  console.log(Auth);
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState();

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-1:ca68e47b-00b6-4b0a-83ea-fb110f22f80f",
        region: "us-east-1",
      },

      Storage: {
        AWSS3: {
          bucket: "React test",
          region: "us-east-1",
        },
      },
    });
  }, []);
  const loadImages = () => {
    Storage.list("")
      .then((files) => {
        console.log(files);
        setFiles(files);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadImages();
  }, []);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const handleUpload = () => {
    const filename = ref.current.files[0].name;
    Storage.put(filename, ref.current.files[0], {
      progressCallback: (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100) + "%");
        setTimeout(() => {
          setProgress();
        }, 1000);
      },
    })
      .then((resp) => {
        console.log(resp);
        loadImages();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShow = (file) => {
    Storage.get(file)
      .then((resp) => {
        console.log(resp);
        setImage(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (file) => {
    Storage.remove(file)
      .then((resp) => {
        console.log(resp);
        loadImages();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <AppLayout>
        <div
          style={{
            margin: "2rem",
          }}
        >
          <h4>Upload Pictures</h4>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                ref={ref}
                onChange={handleUpload}
              />
              {progress}
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </div>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={file.key}>
                <td>{i}</td>
                <td>{file.key}</td>
                <td>
                  <button onClick={() => handleShow(file.key)}>Show</button>
                  <button onClick={() => handleDelete(file.key)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={image} width="600" alt="" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AppLayout>
    </div>
  );
};

export default Upload;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material';

const CreateForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      address: '',
      phone: '',
      website: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      address: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      website: Yup.string().url('Invalid URL').required('Required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here (e.g., send a POST request)
    },
  });

  return (
    <Container maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Create
        </Typography>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps('name')}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps('username')}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* Add the remaining form fields similarly */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: '16px' }}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CreateForm;

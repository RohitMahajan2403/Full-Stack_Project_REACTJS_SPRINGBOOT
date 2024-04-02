import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('div')({
    maxWidth: 400,
    margin: 'auto',
    padding: theme => theme.spacing(2),
});

const FormControlStyled = styled(FormControl)({
    marginBottom: theme => theme.spacing(2),
    minWidth: '100%',
});

const ButtonStyled = styled(Button)({
    marginTop: theme => theme.spacing(2),
});

const AddCourseForm = () => {
    const [formData, setFormData] = useState({

        name: '',
        months: '',
        courseName: '',
        level: '',
        coursePrice:''
    });
    const [languages, setLanguages] = useState([]);
    const [durations, setDurations] = useState([]);

    useEffect(() => {
        fetchLanguages();
        fetchDurations();
    }, []);

    const fetchLanguages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/languages');
            setLanguages(response.data);
        } catch (error) {
            console.error('Error fetching languages:', error);
        }
    };

    const fetchDurations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/durations');
            setDurations(response.data);
        } catch (error) {
            console.error('Error fetching durations:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tutorId = sessionStorage.getItem("userId");
            await axios.post(`http://localhost:8080/api/course-info/update/${tutorId}`, formData);
            console.log('Course added successfully');
            // Clear the form after successful submission
            setFormData({
        
                name: '',
                months: '',
                courseName: '',
                level: '',
                coursePrice:''
            });
        } catch (error) {
            console.error('Error adding course:', error);
            // Display an error message to the user
            alert('Failed to add course. Please try again later.');
        }
    };

    return (
        <FormContainer>
            <Typography variant="h4" gutterBottom>Add Course</Typography>
            <form onSubmit={handleSubmit}>
        
                <FormControlStyled>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select
                        labelId="language-label"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select Language</em>
                        </MenuItem>
                        {languages.map(language => (
                            <MenuItem key={language.id} value={language.name}>{language.name}</MenuItem>
                        ))}
                    </Select>
                </FormControlStyled>
                <FormControlStyled>
                    <InputLabel id="duration-label">Duration</InputLabel>
                    <Select
                        labelId="duration-label"
                        id="months"
                        name="months"
                        value={formData.months}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select Duration</em>
                        </MenuItem>
                        {durations.map(duration => (
                            <MenuItem key={duration.id} value={duration.months}>{duration.months}</MenuItem>
                        ))}
                    </Select>
                </FormControlStyled>
                <TextField
                    id="courseName"
                    name="courseName"
                    label="Course Name"
                    value={formData.courseName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControlStyled>
                    <InputLabel id="level-label">Level</InputLabel>
                    <Select
                        labelId="level-label"
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select Level</em>
                        </MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Expert">Expert</MenuItem>
                    </Select>
                </FormControlStyled>
                <TextField
                    id="coursePrice"
                    name="coursePrice"
                    label="Course Price"
                    value={formData.coursePrice}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <ButtonStyled
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Add Course
                </ButtonStyled>
            </form>
        </FormContainer>
    );
};

export default AddCourseForm;

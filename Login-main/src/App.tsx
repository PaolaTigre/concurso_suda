import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import { Container, Button } from '@mui/material';
import { NavBar } from './common/NavBar';
import {AppRouter} from "./Router"

interface LoginData {
  username: string;
  password: string;
}

function App() {
  const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [background, setBackground] = useState('#ff6636');
    const [image, setImage] = useState('');
}



export default LoginForm;

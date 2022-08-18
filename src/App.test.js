

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './components/Calculator';
import Home from './components/home';
import NavBar from './components/navbar';
import Quotes from './components/quote';
import calculate from './logic/calculate';
import operate from './logic/operate';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import CartToolTip from './Components/CartToolTip';

const domNode = document.getElementById('react-cart-tool-tip');
const root = createRoot(domNode);
domNode && root.render(<CartToolTip />);
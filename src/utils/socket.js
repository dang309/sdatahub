import React from 'react';
import io from 'socket.io-client';
import { API_ROOT } from './constants';

export const socket = io.connect(API_ROOT);
export const SocketContext = React.createContext();

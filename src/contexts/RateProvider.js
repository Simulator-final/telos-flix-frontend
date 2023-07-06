import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import FlashMessage from "../components/flashMessage";
import { RateContext } from "./RateContext";

const apiURL = 'http://localhost:3333';

export default function RateProvider({ children }) {
  const [rateData, setRateData] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');
  const [comments, setComments] = useState([]);

  const showFlashMessage = (message) => {
    setFlashMessage(message);
  };

  const movieRating = async ({ movie_id, content, rating }) => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const ratingResponse = await axios.post(
        `${apiURL}/comments`,
        {
          movie_id,
          content,
          rating
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (ratingResponse.status === 200) {
        setRateData(ratingResponse.data);
        showFlashMessage(`Comentário adicionado com sucesso.`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const fetchComments = async ({ movie_id }) => {
    try {
      const response = await axios.get(`${apiURL}/comments/movie/${movie_id}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchRateData = async () => {
    try {
      const response = await axios.get(`${apiURL}/comments`);
      if (response.status === 200) {
        console.log("Rate Data:", response.data);
        setRateData(response.data); 
        return response.data;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchComments({ movie_id: 'your_movie_id' });
    fetchRateData();
  }, []);

  const RateContextValue = {
    rateData,
    movieRating,
    fetchComments, 
    fetchRateData
  };

  return (
    <RateContext.Provider value={RateContextValue}>
      {flashMessage && <FlashMessage message={flashMessage} onClose={() => setFlashMessage('')} />}
      {children}
    </RateContext.Provider>
  );
}

import axios from 'axios';

export const Api = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=32911996-71a22755398379a087adff4fc&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

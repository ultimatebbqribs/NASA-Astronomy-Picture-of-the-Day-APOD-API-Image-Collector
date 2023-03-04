import RenderImageTiles from "./RenderImageTiles";
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';

afterEach(cleanup);

test('click event calls add to favorites function', ()=>{
    const addToFavoritesSpy = jest.fn();
    const { getByTestId } = render(
        <RenderImageTiles addToFavorites={addToFavoritesSpy} />
      );

      fireEvent.click(getByTestId("add_to_favorites"));
      expect(addToFavoritesSpy).toHaveBeenCalled();
})
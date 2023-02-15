import React from 'react';
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import page, * as pageActions  from "../Slice/Navslice";

describe('Page Slice Reducer Test', () => {

  describe('actions', () => {
    it('should create actions', () => {
          
      const actions = [
        pageActions.setCurPage(),
        pageActions.rpaging(),
      ];
      expect(actions).toEqual(expectedActions);
    });
  });

    // describe('reducer', () => {
    //     let state = page(undefined, {});
    //     it('should return the initialState', () => {
    //       expect(state).toBe('page', 1);
    //     });
    
    //     it('should setCurPage', () => {
    //       state = page(state, setCurPage("2"));
    //       expect(state).toHaveProperty('page', 2);
    //     });
    
    //     // it('should rpaging', () => {
    //     //   state = counter(state, rpaging("5"));
    //     //   expect(state).toHaveProperty('number', 0);
    //     // });
    // });


});
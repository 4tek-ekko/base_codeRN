import React, { version } from 'react'
import { View } from 'react-native'

import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {SupperSdk} from 'react-native-super-app-sdk';

import Main from './Screens/Main';

const ProjectName = forwardRef(({dataSupper}, ref) => {
  useImperativeHandle(ref, () => ({
    // Todo function giao tiep voi Supper app
    // Define actionID and param in sdk
    getData: () => {
      return 'Mini app data';
    },
  }));
  useEffect(() => {
    SupperSdk.init(dataSupper, data => {
      //handle after link with supper app
    });
    return () => {
      SupperSdk.destroy();
    };
  }, [dataSupper]);
  return <Main />;
});

export default ProjectName;
#!/usr/bin/env node
process.argv.forEach(function (val, index, _) {
    if (val === 'ios') {
      console.log(index + ': ' + val)
      console.log(process.env.REACT_APP_UPLOAD_URL)
    }
  })
  
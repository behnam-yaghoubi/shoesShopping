import React from 'react';
import { Button, Typography } from '@material-ui/core';

export default function MasterLayout() {
  return (
    <div style={{ padding: 25 }}>
      <Button variant="contained" color="secondary">
        دوم
      </Button>
      <Button variant="contained" color="primary">
        اول
      </Button>
      <Typography color="textPrimary" variant="h1">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="h2">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="h3">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="h4">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="h5">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="h6">
        عنوان
      </Typography>
      <Typography color="textPrimary" variant="body1">
        این پاراگراف اول است
      </Typography>
      <Typography color="textPrimary" variant="body2">
        این پاراگراف اول است
      </Typography>
      <Typography color="textPrimary" variant="subtitle1">
        این زیر عنوان است
      </Typography>
      <Typography color="textPrimary" variant="subtitle2">
        این زیر عنوان است
      </Typography>
      <Typography color="textPrimary" variant="caption">
        زیر پست
      </Typography>
      <br />
      <Typography variant="overline">تخفیف</Typography>
    </div>
  );
}

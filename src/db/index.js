import mongoose from 'mongoose';

export const getDBConnection = () => {
  const dbUrl = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PWD}@${process.env.DB_URI}/UrlShortifyHub?retryWrites=true&w=majority`;

  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected successfully!!!');
    })
    .catch((err) => {
      console.log('MongoDB connect error:,err');
    });
};

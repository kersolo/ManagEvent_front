export const themeProvider = {
  input: {
    defaultProps: {
      color: 'orange'
    },
    styles: {
      base: {
        input: {
          borderColor:
            'placeholder-shown:border-orangeDP  placeholder-shown:border-t-orangeDP border-orangeDP',

          color: 'text-white'
        },
        label: {
          color: 'peer-placeholder-shown:text-white',
          borderColor:
            'after:border-orangeDP before:border-orangeDP peer-placeholder-shown:before:border-orangeDP '
        }
      }
    }
  }
};

const redirect = ({ destination, props } = {}) => {
  return {
    redirect: {
      destination: destination ?? '/404',
      permanent: false,
    },
    props: props ?? {},
  };
};

export default redirect;

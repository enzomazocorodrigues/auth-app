export function getStaticProps() {
  return {
    redirect: {
      destination: "/signin",
      permanent: true,
    },
  };
}

export default function Custom404() {
  return null;
}

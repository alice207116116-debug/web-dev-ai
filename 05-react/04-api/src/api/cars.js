export const getCars = async () => {
      // fetch : 서버에 요청을 보낸다
    const res = await fetch("http://localhost:4000/api/cars");
    console.log(res);
};
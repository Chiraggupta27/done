 const emailReegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])(?=.{8,})/;

 const nameRegex = /^[a-zA-Z]{2,30}$/;

 const numberRegex = /^[0-9]{8,10}$/;

 const workEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const personalEmailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  export default {
    emailReegex,
    passwordRegex,
    nameRegex,
    numberRegex,
    workEmailRegex,
    personalEmailRegex,
  }

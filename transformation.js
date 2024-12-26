// 사용자 나이에 따라 등급을 부여하는 함수
export function assignUserGrade(user) {
    let grade;
    if (user.age < 19) {
      grade = "JUNIOR";
    } else if (user.age < 40) {
      grade = "ADULT";
    } else {
      grade = "SENIOR";
    }
  
    return { ...user, grade };
  }

  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let result = (`${year}-${month}-${day}`);

  // 사용자 정보를 표준 형식으로 변환하는 함수
export function formatUserData(user) {
    return {
      ...user,
      name: user.name.toUpperCase(),
      createdAt : result
    };
  }
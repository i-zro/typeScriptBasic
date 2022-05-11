type Score = 'A' | 'B' | 'C' | 'D'
// 제한 변수용

interface User{
    name: string;
    age: number;
    gender?: string; // 물음표 : 필수값 아닐 때
    readonly birthYear: number; // readonly : 수정 못하게 하고 싶을 때
    [grade: number]: Score; // 필수값 아니고 그게 여러개일 때 => 배열
}

let user : User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    // 3: 'F' // 불가
}

// user.birthYear = 3000; // readonly라서 불가

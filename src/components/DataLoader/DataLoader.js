export const loadQuizData =async()=>{
    const loadData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizData = await loadData.json();
    const mainData = quizData.data;
    return mainData;
}
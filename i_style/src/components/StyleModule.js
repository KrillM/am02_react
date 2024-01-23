import styled from '../style/styleModule.module.css'

export default function StyleModule() {
    return (
    <section className={styled.container}>
        <div className={styled.purple}></div>
        <div className={styled.navy}></div>
        <div className={styled.blue}></div>
        <div className={styled.green}></div>
        <div className={styled.yellow}></div>
        <div className={styled.orange}></div>
        <div className={styled.red}></div>
    </section>
    );
}
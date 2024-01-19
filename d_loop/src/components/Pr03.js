import { useState } from "react";

export default function Pr03(){
    const [list, setList] = useState([
        {id: 1, writter: "예나", comment: "처음엔 사랑이란 게"},
        {id: 2, writter: "지수", comment: "참 쉽게 영원할 거라"},
        {id: 3, writter: "크릴", comment: "그렇게 믿었었는데"},
    ])

    const [comment, setComment] = useState('');
    const [writter, setWritter] = useState('');

    const addList = () => {
        if(comment.trim().length === 0){
            alert("내용을 입력하세요.");
            return;
        } else if(writter.trim().length === 0){
            alert("작성자를 입력하세요.");
            return;
        }

        const updateList = list.concat({
            id: list.length + 1,
            comment: comment,
            writter: writter
        });

        setComment('');
        setWritter('');
        setList(updateList);
    }

    const [searchType, setSearchType] = useState('comment');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchKeyWord = (keyword) => {
        const finding = list.filter((item) => item[searchType].toLowerCase().includes(keyword.toLowerCase()));
        setSearchResult(finding);
    }

    return(<>
        내용: <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}}></input>
        작성자: <input type="text" value={writter} onChange={(e)=>{setWritter(e.target.value)}}></input>
        <button type="button" onClick={addList}>ADD</button>
        <br/>

        <select onChange={(e) => {setSearchType(e.target.value)}}>
            <option value="comment">내용</option>
            <option value="writter">작성자</option>
        </select>
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
        <button type="button" onClick={()=>searchKeyWord(search)}>검색</button>

        <h2>전체 댓글 목록</h2>
        <table border="bold">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>댓글</th>
                    <th>작성자</th>
                </tr>
            </thead>
            <tbody>
                {list.map((value) => (
                    <tr  key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.comment}</td>
                        <td>{value.writter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h2>댓글 검색 결과</h2>
        {searchResult && 
            <table border="bold">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>댓글</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((value) => (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.comment}</td>
                            <td>{value.writter}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </>)
}
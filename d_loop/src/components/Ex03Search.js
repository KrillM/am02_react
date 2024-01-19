import { useState } from 'react';

export default function Comment() {
    const [inputs, setInputs] = useState({
        writer: '',
        content: '',
        search: '',
    });
    const { writer, content, search } = inputs;
    const [comment, setComment] = useState([
        {
            id: 1,
            content: '처음에 사랑이란게',
            writer: '지수',
        }, {
            id: 2,
            content: '참 쉽게 영원할거라',
            writer: '수아',
        }, {
            id: 3,
            content: '그렇게 믿었었는데',
            writer: '크릴',
        },
    ]);
    const [result, setResult] = useState([]);
    const [searchType, setSearchType] = useState('writer');

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const addComment = () => {
        if (writer.trim().length === 0) {
            alert('작성자를 입력해주세요.');
            return;
        } else if (content.trim().length === 0) {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        const newComment = {
            id: comment.length + 1,
            content,
            writer,
        };

        setComment([...comment, newComment]);
            setInputs({
            ...inputs,
            content: '',
            writer: '',
        });
    };

    const selectSearchType = (e) => {
        setSearchType(e.target.value);
    };

    const searchComment = () => {
        const searchResult = comment.filter((item) => {
            if (!item[searchType].includes(search)) {
                return null;
            }
            return item;
        });

        setResult(searchResult);
            setInputs({
            ...inputs,
            search: '',
        });
    };

  return (
    <>
        <form>
            <label htmlFor='content2'>댓글:</label>
            <input id='content2' type='text'name='content' value={content} onChange={onChange} />
            <label htmlFor='wirter2'>작성자:</label>
            <input id='wirter2' type='text' name='writer' value={writer} onChange={onChange}/>
            <button type='button' onClick={addComment}>작성</button>
        </form>

        <form>
            <select name='type' onChange={selectSearchType}>
                <option value='content'>댓글</option>
                <option value='writer'>작성자</option>
            </select>

            <input type='text' name='search' placeholder='검색어' value={search} onChange={onChange}/>
            <button type='button' onClick={searchComment}>검색</button>
        </form>

        <h3>전체 댓글 목록</h3>
        <table border={1}>
            <thead>
            <tr>
                <th>번호</th>
                <th>댓글</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            {comment.map((value) => {
                return (
                <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.content}</td>
                    <td>{value.writer}</td>
                </tr>
                );
            })}
            </tbody>
        </table>

        <h3>댓글 검색 결과</h3>
        {result.length > 0 ? (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>댓글</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                    {result.map((value) => {
                        return (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.content}</td>
                            <td>{value.writer}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        ) : (
            <h5>검색 결과가 없습니다.</h5>
        )}
    </>
  );
}

import React from 'react'

export default function Delete({ deletem, setDeletem, deleteMovies }) {
    return (<>
        삭제할 ID <input type="number" value={deletem} onChange={(e) => setDeletem(e.target.value)} />
        <button onClick={deleteMovies}>삭제하기</button></>
    )
}

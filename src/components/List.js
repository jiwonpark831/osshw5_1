import React from 'react'

export default function List({ list }) {
    return (
        <table id="movie_list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>제목</th>
                    <th>개봉년도</th>
                    <th>관객수</th>
                </tr>
            </thead>
            <tbody >
                {list.map((movie) => (
                    <tr key={movie.id}>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.people}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

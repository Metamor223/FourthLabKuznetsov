export default function MountainTable(mountain){
    return(
    <>
           <table>
            <caption>
                Таблица по вершинам
            </caption>
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Название</th>
                <th scope="col">Высота</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">mountain.id</th>
                <td>mountain.name</td>
                <td>mountain.height</td>
                <td>
                    <button>Удалить</button>
                </td>
                </tr>
            </tbody>
           </table>
           <button>Добавить вершину</button>
    </>
    );
}
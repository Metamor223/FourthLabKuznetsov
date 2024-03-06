export default function ClimbersTable(climber){
    return(
    <>
           <table>
            <caption>
                Таблица по Альпинистам
            </caption>
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Имя</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">climber.id</th>
                <td>climber.name</td>
                <td>
                    <button>Удалить</button>
                </td>
                </tr>
            </tbody>
           </table>
           <button>Добавить альпиниста</button>
    </>
    );
}
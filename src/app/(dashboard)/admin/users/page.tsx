import { Title } from '@/components';

export default function UsersPage() {
  return (
    <section>
      <Title title="Listado de Usuarios" subtitle="Módulo para la gestión y administración de usuarios del sistema" />
      <div>
        <table className="w-full">
          <thead className="thead_mtto">
            <tr>
              <th className="tabla_th">uno</th>
              <th className="tabla_th">uno</th>
              <th className="tabla_th">uno</th>
              <th className="tabla_th">uno</th>
            </tr>
          </thead>
          <tbody className="tbody_mtto">
            <tr className="hover:bg-red-700">
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
            </tr>
            <tr className="hover:bg-red-700">
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
            </tr>
            <tr className="hover:bg-red-700">
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

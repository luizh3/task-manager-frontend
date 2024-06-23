import Th from "./Th";
import Thead from "./Thead";
import Tr from "./Tr";
import IconCircle from "../iconCircle";
import * as Icons from "react-icons/md";
import Td from "./Td";
import Badget from "../Badget";

function IconByName({ icon }) {
  const MdIcon = Icons[icon.name];
  return (
    <MdIcon
      style={{ fontSize: icon.size, color: icon.color }}
      onClick={icon.onClick}
    />
  );
}

export default function Table({ clasName, data }) {
  return (
    <div
      className={`border rounded-lg shadow overflow-hidden border-gray-300 ${clasName}`}
    >
      <table className="h-fit w-full text-gray-700 bg-gray-100">
        <Thead>
          {data?.header?.map((header, index) => (
            <Td className={header?.style} key={index}>
              {header?.description}
            </Td>
          ))}
        </Thead>
        <tbody className="divide-y">
          {data?.rows?.map((row, index) => (
            <Tr clasName={row?.style} key={index}>
              {row?.columns?.map((column, index) => (
                <Th className={column?.style} key={index}>
                  {column?.image_url && <IconCircle url={column?.image_url} />}
                  {column?.description}
                  {column?.badgets?.map((badget, index) => (
                    <Badget
                      color={badget.color}
                      text={badget.description}
                      key={index}
                    />
                  ))}
                  {column?.icons?.map((icon, index) => (
                    <IconByName icon={icon} key={index} />
                  ))}
                </Th>
              ))}
            </Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

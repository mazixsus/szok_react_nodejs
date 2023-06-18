import { MainPageButton } from "./mainPageButton";

export const MainPageListRow = ({ listRow, rowNumber }) => {
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{listRow.category}</td>
      <td>
        {listRow.options.map((button, i) => (
          <MainPageButton key={i} button={button} />
        ))}
      </td>
    </tr>
  );
};

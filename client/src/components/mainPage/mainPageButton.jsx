export const MainPageButton = ({ button }) => {
  return (
    <a
      href="{{ path('worker_app/employees/list') }}"
      className="btn btn-primary mb-1"
    >
      {button.option}
    </a>
  );
};

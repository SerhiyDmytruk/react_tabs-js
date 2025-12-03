export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            data-cy="Tab"
            className={tab.id === activeTabId ? 'is-active' : ''}
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

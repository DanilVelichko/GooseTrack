import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ taskObjectFormation, title, tasks }) => {
  return (
    <ColumnWrapper>
      <ColumnHeadBar title={title} />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn taskObjectFormation={taskObjectFormation} title={title} />
    </ColumnWrapper>
  );
};

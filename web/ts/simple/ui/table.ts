import {ComponentDescriptor, VNode, createVRoot, createVElement} from 'kivi';

const TableCell = new ComponentDescriptor<string, any>()
  .rootTag('td')
  .init((c) => {
    c.element.addEventListener('click', (e) => {
      console.log('Click', c.data);
      e.stopPropagation();
    });
  })
  .update((c) => {
    c.sync(createVRoot().className('TableCell').children(c.data));
  });

const TableRow = new ComponentDescriptor<TableItemState, any>()
  .rootTag('tr')
  .update((c) => {
    const data = c.data;
    const props = data.props;

    const children = [TableCell.createVNode('#' + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    c.sync(createVRoot()
      .attrs({'data-id': data.id})
      .className(data.active ? 'TableRow active' : 'TableRow')
      .disableChildrenShapeError()
      .children(children));
  });

export const Table = new ComponentDescriptor<TableState, any>()
  .rootTag('table')
  .update((c) => {
    c.sync(createVRoot()
      .className('Table')
      .children([
        createVElement('tbody')
          .trackByKeyChildren(c.data.items.map((i) => TableRow.createVNode(i).key(i.id)))
      ]));
  });

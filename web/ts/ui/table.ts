import {ComponentDescriptor, VModel, VNode, createRootFromModel, createElement} from 'kivi';

const TableCellRoot = new VModel('td').enableCloning().className('TableCell');
const TableCell = new ComponentDescriptor<string, any>('TableCell')
  .rootModel(TableCellRoot)
  .init((c) => {
    (c.element as any).xtag = c;
    (c.element as any).onclick = _handleClick;
  })
  .update((c) => {
    c.sync(createRootFromModel(TableCellRoot).children(c.data));
  });

function _handleClick(e: MouseEvent) {
  console.log('Click', (e.currentTarget as any).xtag.data);
  e.stopPropagation;
}

const TableRowRoot = new VModel<[boolean, number]>('tr').enableCloning()
  .updateHandler((node, a, b) => {
    let e = node as HTMLElement;
    if (a === void 0) {
      e.className = b[0] ? 'TableRow active' : 'TableRow';
      e.setAttribute('data-id', '' + b[1]);
    } else if (a[0] !== b[0]) {
      e.className = b[0] ? 'TableRow active' : 'TableRow';
    }
  });

const TableRow = new ComponentDescriptor<TableItemState, any>('TableRow')
  .rootModel(TableRowRoot)
  .update((c) => {
    let data = c.data;
    let props = data.props;

    let children = [TableCell.createVNode('#' + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    c.sync(createRootFromModel(TableRowRoot, [data.active, data.id])
        .disableChildrenShapeError()
        .children(children));
  });

const TableRoot = new VModel('table').enableCloning().className('Table');
export const Table = new ComponentDescriptor<TableState, any>('Table')
  .rootModel(TableRoot)
  .update((c) => {
    let data = c.data;
    let items = data.items;

    let children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      children.push(TableRow.createVNode(item).key(item.id));
    }

    c.sync(createRootFromModel(TableRoot).children([
      createElement('tbody').trackByKeyChildren(children)
    ]))
  });


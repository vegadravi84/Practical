import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
interface TreeNode {
  id: number | any;
  refMenuId: number | null | any;
  name: string | any;
  children?: TreeNode[] | any;
}
@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss']
})
export class MenuTreeComponent implements OnInit {
  // Array to hold tree nodes and raw data.
  treeData: TreeNode[] = [];
  getdata: any[] = [];

  // Constructor with menuService parameter.
  constructor(private menuService: MenuService) { }

  // Called when the component starts.
  ngOnInit(): void {
    // Get menu data using menuService.
    this.menuService.getMenuData().subscribe((res: any) => {
      // Store received data.
      this.getdata = res.data;

      // Index nodes based on IDs.
      const indexedNodes: { [id: number]: TreeNode } = {};

      // Map data to indexed nodes.
      this.getdata.map((node: any) => {
        indexedNodes[node.id] = {
          id: node.id,
          refMenuId: node.refMenuId,
          name: node.name,
          children: []
        };
      });

      // Loop through indexed nodes.
      Object.keys(indexedNodes).forEach(id => {
        const node = indexedNodes[parseInt(id, 10)];

        // If node has reference ID and reference node exists
        // add current node as child to reference node
        if (node.refMenuId !== null && indexedNodes[node.refMenuId]) {
          indexedNodes[node.refMenuId].children.push(node);
        }
        // Otherwise, add node to top-level treeData array
        else {
          this.treeData.push(node);
        }
      });
    });
  }
}

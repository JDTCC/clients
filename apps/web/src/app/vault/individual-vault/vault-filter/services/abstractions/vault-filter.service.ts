import { Observable } from "rxjs";

import { Organization } from "@bitwarden/common/admin-console/models/domain/organization";
import { CollectionView } from "@bitwarden/common/src/admin-console/models/view/collection.view";
import { TreeNode } from "@bitwarden/common/src/models/domain/tree-node";
import { FolderView } from "@bitwarden/common/src/vault/models/view/folder.view";

import {
  CipherTypeFilter,
  CollectionFilter,
  FolderFilter,
  OrganizationFilter,
} from "../../shared/models/vault-filter.type";

export abstract class VaultFilterService {
  collapsedFilterNodes$: Observable<Set<string>>;
  filteredFolders$: Observable<FolderView[]>;
  filteredCollections$: Observable<CollectionView[]>;
  organizationTree$: Observable<TreeNode<OrganizationFilter>>;
  folderTree$: Observable<TreeNode<FolderFilter>>;
  collectionTree$: Observable<TreeNode<CollectionFilter>>;
  cipherTypeTree$: Observable<TreeNode<CipherTypeFilter>>;
  reloadCollections: () => Promise<void>;
  getCollectionNodeFromTree: (id: string) => Promise<TreeNode<CollectionFilter>>;
  setCollapsedFilterNodes: (collapsedFilterNodes: Set<string>) => Promise<void>;
  expandOrgFilter: () => Promise<void>;
  setOrganizationFilter: (organization: Organization) => void;
  buildTypeTree: (
    head: CipherTypeFilter,
    array: CipherTypeFilter[]
  ) => Observable<TreeNode<CipherTypeFilter>>;
}

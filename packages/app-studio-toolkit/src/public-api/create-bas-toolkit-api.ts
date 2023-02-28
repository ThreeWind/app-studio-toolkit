import {
  BasToolkit,
  BasWorkspaceApi,
} from "@sap-devx/app-studio-toolkit-types";

export function createBasToolkitAPI(
  workspaceAPI: BasWorkspaceApi,
  baseBasToolkitAPI: Omit<BasToolkit, "workspaceAPI">
): BasToolkit {
  const exportedBasToolkitAPI = {
    // note `...` here effectively does a "shallow" clone
    ...baseBasToolkitAPI,
    workspaceAPI,
  };

  // "Immutability Changes Everything"
  // note we are not "deep" freezing because the usage of namespaces on the API
  // is expected to be removed.
  Object.freeze(exportedBasToolkitAPI);
  return exportedBasToolkitAPI;
}

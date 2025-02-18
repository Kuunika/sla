
export const packages = [
  "@openimis/fe-core",
  "@openimis/fe-home",
  "@openimis/fe-location",
  "@openimis/fe-insuree",
  "@openimis/fe-medical",
  "@openimis/fe-medical_pricelist",
  "@openimis/fe-product",
  "@openimis/fe-policy",
  "@openimis/fe-payer",
  "@openimis/fe-contribution",
  // "@openimis/fe-payment",
  "@openimis/fe-claim",
  "@openimis/fe-claim_batch",
  "@openimis/fe-admin",
  "@openimis/fe-tools",
  "@openimis/fe-profile",
  "@openimis/fe-calculation",
  "@openimis/fe-policyholder",
  "@openimis/fe-contribution_plan",
  "@openimis/fe-contract",
  "@openimis/fe-invoice",
  "@openimis/fe-opensearch_reports",
  // "@openimis/fe-grievance_social_protection",
  "@openimis/fe-nepal_language_pack",
  "@openimis/fe-claim_sampling"
];


export function loadModules(cfg = {}) {
  const loadedModules = [];

  try {
    loadedModules.push(require("@openimis/fe-core").CoreModule(cfg["fe-core"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-core". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-home").HomeModule(cfg["fe-home"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-home". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-location").LocationModule(cfg["fe-location"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-location". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-insuree").InsureeModule(cfg["fe-insuree"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-insuree". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-medical").MedicalModule(cfg["fe-medical"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-medical". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-medical_pricelist").MedicalPriceListModule(cfg["fe-medical_pricelist"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-medical_pricelist". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-product").ProductModule(cfg["fe-product"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-product". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-policy").PolicyModule(cfg["fe-policy"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-policy". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-payer").PayerModule(cfg["fe-payer"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-payer". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-contribution").ContributionModule(cfg["fe-contribution"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-contribution". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  // try {
  //   loadedModules.push(require("@openimis/fe-payment").PaymentModule(cfg["fe-payment"] || {}));
  // } catch (error) {
  //   alert(`Failed to load module "@openimis/fe-payment". More details can be found in the developer console. Look for: ${error}`);
  //   console.error(error);
  // }

  try {
    loadedModules.push(require("@openimis/fe-claim").ClaimModule(cfg["fe-claim"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-claim". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-claim_batch").ClaimBatchModule(cfg["fe-claim_batch"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-claim_batch". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-admin").AdminModule(cfg["fe-admin"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-admin". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-tools").ToolsModule(cfg["fe-tools"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-tools". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-profile").ProfileModule(cfg["fe-profile"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-profile". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-calculation").CalculationModule(cfg["fe-calculation"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-calculation". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-policyholder").PolicyHolderModule(cfg["fe-policyholder"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-policyholder". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-contribution_plan").ContributionPlanModule(cfg["fe-contribution_plan"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-contribution_plan". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-contract").ContractModule(cfg["fe-contract"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-contract". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-invoice").InvoiceModule(cfg["fe-invoice"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-invoice". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  try {
    loadedModules.push(require("@openimis/fe-opensearch_reports").OpenSearchReportsModule(cfg["fe-opensearch_reports"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-opensearch_reports". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  // try {
  //   loadedModules.push(require("@openimis/fe-grievance_social_protection").GrievanceModule(cfg["fe-grievance_social_protection"] || {}));
  // } catch (error) {
  //   alert(`Failed to load module "@openimis/fe-grievance_social_protection". More details can be found in the developer console. Look for: ${error}`);
  //   console.error(error);
  // }

  // try {
  //   loadedModules.push(require("@openimis/fe-nepal_language_pack").NepalLanguageModule(cfg["fe-nepal_language_pack"] || {}));
  // } catch (error) {
  //   alert(`Failed to load module "@openimis/fe-nepal_language_pack". More details can be found in the developer console. Look for: ${error}`);
  //   console.error(error);
  // }

  try {
    loadedModules.push(require("@openimis/fe-claim_sampling").ClaimSamplingModule(cfg["fe-claim_sampling"] || {}));
  } catch (error) {
    alert(`Failed to load module "@openimis/fe-claim_sampling". More details can be found in the developer console. Look for: ${error}`);
    console.error(error);
  }

  return loadedModules;
}

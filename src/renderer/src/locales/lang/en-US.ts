export default {
  common: {
    language: 'English',
    workspace: 'WorkSpace',
    files: 'Files',
    keychain: 'Keychain',
    extensions: 'Extensions',
    monitor: 'Monitor',
    ai: 'AI',
    user: 'User',
    setting: 'Setting',
    notice: 'Notice',
    logout: 'Logout',
    userInfo: 'User Info',
    userConfig: 'Setting',
    alias: 'Alias Config',
    assetConfig: 'Asset Config',
    keyChainConfig: 'Key Chain',
    search: 'Search',
    connect: 'Connect',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    create: 'Create',
    cancel: 'Cancel',
    remove: 'Remove'
  },
  term: {
    welcome: 'Welcome to use Chaterm'
  },
  login: {
    enterprise: 'Enterprise',
    personal: 'Personal',
    contact: 'Contact us',
    welcome: 'Welcome to use',
    title: 'Chaterm',
    loginType: 'Login with account and password',
    login: 'Login',
    applyTag: 'No account ? ',
    apply: 'Apply'
  },
  workspace: {
    workspace: 'Workspace',
    personal: 'Personal',
    searchHost: 'Search host',
    connectToServer: 'Connect to {ip} server'
  },
  header: {
    title: 'Smart Bastion Host Management System'
  },
  user: {
    autoCompleteStatus: 'Auto completion',
    quickVimStatus: 'Quick vim',
    commonVimStatus: 'Common vim',
    aliasStatus: 'Global alias',
    highlightStatus: 'Highlight',
    fontSize: 'Font size',
    cursorStyle: 'Cursor type',
    scrollBack: 'Number of scroll rollback lines',
    install: 'Installed',
    installing: 'Installing',
    notInstall: 'Not Installed',
    uninstall: 'Uninstall',
    uninstalling: 'Uninstalling',
    baseSetting: 'Base setting',
    ai: 'AI',
    keychain: 'Keychain',
    textEditor: 'Text editor',
    commandLineOpen: 'Command line open',
    fileManagerPlugin: 'File manager plugin',
    fileManagerPluginDescribe: 'Open the file manager by right clicking with the mouse',
    cursorStyleBlock: 'Block',
    cursorStyleBar: 'Bar',
    cursorStyleUnderline: 'Underline',
    language: 'Language',
    enterprise: 'Enterprise',
    personal: 'Personal',
    name: 'Name',
    email: 'Email',
    mobile: 'Mobile',
    organization: 'Organization',
    ip: 'IP Address',
    macAddress: 'Mac Address',
    general: 'General',
    extensions: 'Extensions',
    model: 'Model',
    enableExtendedThinking: 'Enable extended thinking',
    enableExtendedThinkingDescribe:
      'Higher budgets may allow you to achieve more comprehensive and nuanced reasoning',
    autoApproval: 'Auto Approval',
    autoApprovalDescribe: 'Allow Agent to run tools without asking for confirmation',
    features: 'Features',
    enableCheckpoints: 'Enable Checkpoints',
    enableCheckpointsDescribe:
      'Enables extension to save checkpoints of workspace throughout the task',
    openAIReasoningEffort: 'OpenAI Reasoning Effort',
    openAIReasoningEffortLow: 'Low',
    openAIReasoningEffortMedium: 'Medium',
    openAIReasoningEffortHigh: 'High',
    shellIntegrationTimeout: 'Shell integration timeout (seconds)',
    shellIntegrationTimeoutPh: 'Enter timeout in seconds',
    shellIntegrationTimeoutDescribe: 'Set how long to wait for shell integration to activate',
    terminal: 'Terminal',
    apiConfiguration: 'API Configuration',
    apiProvider: 'API Provider',
    apiProviderDescribe:
      'Authenticate by either providing the keys above or use the default AWS credential providers, i.e. ~/.aws/credentials or environment variables. These credentials are only used locally to make API requests from this extension.\n',
    awsAccessKey: 'AWS Access Key',
    awsAccessKeyPh: 'Enter Access Key',
    awsSecretKey: 'AWS Secret Key',
    awsSecretKeyPh: 'Enter Secret Key',
    awsSessionToken: 'AWS Session Token',
    awsSessionTokenPh: 'Enter Session Token',
    awsRegion: 'AWS Region',
    awsRegionPh: 'Select a region...',
    awsEndpointSelected: 'Use custom VPC endpoint',
    awsBedrockEndpointPh: 'Enter VPC Endpoint URL (optional)',
    awsUseCrossRegionInference: 'Use cross-region inference',
    chatSettings: 'Chat Mode',
    liteLlmBaseUrl: 'Base URL',
    liteLlmBaseUrlPh: 'Enter Base URL',
    liteLlmApiKey: 'API Key',
    liteLlmApiKeyPh: 'Enter API Key',
    customInstructions: 'Custom Instructions',
    customInstructionsPh: `These instructions are added to the end of the system prompt sent with every request. e.g. Always respond in Chinese-simplified`,
    deepSeekApiKey: `DeepSeek API Key`,
    deepSeekApiKeyPh: `Enter API Key...`,
    deepSeekApiKeyDescribe: `This key is stored locally and only used to make API requests from this client.`
  },
  extensions: {
    extensions: 'Extensions',
    alias: 'Alias',
    aliasDescription: 'Global alias config',
    fuzzySearch: 'Fuzzy Search',
    command: 'Command',
    action: 'Action',
    success: 'Success',
    error: 'Error',
    errorDescription: 'Creation failed!',
    errorNetWork: 'Network request exception',
    warning: 'Warning',
    missingAliasCommand: 'Missing alias or command!',
    aliasAlreadyExists: 'Alias already exists！',
    AddCommand: 'Add Command'
  },
  personal: {
    host: 'Host',
    newHost: 'New Host',
    keyChain: 'KeyChain',
    address: 'Address',
    general: 'General',
    group: 'Group',
    accountPassword: 'Account Password',
    key: 'Key',
    userName: 'UserName',
    passWord: 'PassWord',
    processor: 'Processor',
    command: 'Command',
    verificationMethod: 'VerificationMethod',
    alias: 'Alias',
    pleaseInput: 'Please Input',
    pleaseSelect: 'Please Select',
    personal: 'Personal',
    enterprise: 'Enterprise',
    editHost: 'Edit Host',
    saveAsset: 'Save Asset',
    createAsset: 'Create Asset',
    deleteConfirm: 'Delete Confirmation',
    deleteConfirmContent: 'Are you sure you want to delete asset "{name}"?',
    deleteSuccess: 'Asset {name} deleted successfully',
    deleteFailure: 'Delete failed',
    deleteError: 'Delete error: {error}',
    createSuccess: 'Asset created successfully',
    saveSuccess: 'Save successful',
    saveError: 'Save error',
    favoriteUpdateSuccess: 'Asset {name} favorite status updated',
    favoriteUpdateFailure: 'Failed to update favorite status',
    favoriteUpdateError: 'Error updating favorite status',
    defaultGroup: 'Hosts',
    hostType: 'ssh'
  },
  ai: {
    welcome: 'What can I do for you in the terminal?',
    searchHost: 'Search by IP',
    noMatchingHosts: 'No matching hosts',
    copy: 'Copy',
    run: 'Run',
    reject: 'Reject',
    cancel: 'Cancel',
    resume: 'Resume',
    agentMessage: 'Plan,search,execute anything',
    newChat: 'New Chat',
    showChatHistory: 'Show History',
    closeAiSidebar: 'Close AI Sidebar',
    addHost: 'Add Host',
    processing: 'processing...'
  },
  keyChain: {
    newKey: 'New Key',
    editKey: 'Edit Key',
    saveKey: 'Save Key',
    createKey: 'Create Key',
    deleteConfirm: 'Delete Confirmation',
    deleteConfirmContent: 'Are you sure you want to delete key "{name}"?',
    privateKey: 'Private Key',
    publicKey: 'Public Key',
    passphrase: 'Passphrase',
    alias: 'Alias',
    key: 'Key',
    pleaseInput: 'Please Input',
    label: 'Label',
    type: 'Type: ',
    deleteSuccess: 'Key {name} deleted successfully',
    deleteFailure: 'Delete failed',
    deleteError: 'Delete error: {error}',
    createSuccess: 'Key created successfully',
    saveSuccess: 'Save successful',
    saveError: 'Save error'
  }
}

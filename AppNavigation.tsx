export type RootStackParamList = {
    Home: undefined
    Details: undefined
    CreateAccount: undefined
    ForgotPassword: undefined
    Tabs: undefined
    FeedTab: undefined
    Feed: undefined
  
    // ... and so on
  }
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
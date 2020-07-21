namespace GreetingLib {
    
    export interface LogOptions {
      verbose?: boolean;
    }
    
    export interface AlertOptions {
      modal: boolean;
      title?: string;
      color?: string;
    }

    export function helloNameSpace(){
        console.log('namespace');
    }
}

namespace GreetingLib.Options {
    // Refer to via GreetingLib.Options.Log
    export interface Log {
      verbose?: boolean;
    }
    export interface Alert {
      modal: boolean;
      title?: string;
      color?: string;
    }
}

// Must to compile into js before using
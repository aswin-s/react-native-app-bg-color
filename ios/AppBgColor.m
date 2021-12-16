#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AppBgColor, NSObject)

RCT_EXTERN_METHOD(setBackgroundColor:(NSString)a)
RCT_EXTERN_METHOD(getBackgroundColor:(RCTResponseSenderBlock)callback)

@end

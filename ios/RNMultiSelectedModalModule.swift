//
//  RNMultiSelectedModalModule.swift
//  RNMultiSelectedModalModule
//
//  Copyright © 2022 Negin Oskouie. All rights reserved.
//

import Foundation

@objc(RNMultiSelectedModalModule)
class RNMultiSelectedModalModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

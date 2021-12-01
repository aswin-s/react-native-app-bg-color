@objc(AppBgColor)
class AppBgColor: NSObject {
    
    func hexStringToUIColor (hex:String) -> UIColor {
        var cString:String = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

        if (cString.hasPrefix("#")) {
            cString.remove(at: cString.startIndex)
        }

        if ((cString.count) != 6) {
            return UIColor.white
        }

        var rgbValue:UInt64 = 0
        Scanner(string: cString).scanHexInt64(&rgbValue)

        return UIColor(
            red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
            alpha: CGFloat(1.0)
        )
    }
    
    func _setBgColor(color:String) -> Void {
        let backgroundColor = hexStringToUIColor(hex: color)
        
        if let rootViewController = UIApplication.shared.windows.first!.rootViewController {
            rootViewController.view.backgroundColor = backgroundColor
        }
    }
    
    @objc(setBackgroundColor:)
    func setBackgroundColor(a: String) -> Void {
        DispatchQueue.main.async {
            self._setBgColor(color: a)
        }
    }
}

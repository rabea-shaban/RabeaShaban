[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing') | Out-Null

# Helper to resize and save image as JPEG
function Compress-And-Resize-To-Jpeg ($src, $dest, $maxWidth, $quality) {
    if (-not (Test-Path $src)) { 
        Write-Host "File not found: $src"
        return 
    }
    $img = [System.Drawing.Image]::FromFile($src)
    $width = $img.Width
    $height = $img.Height

    if ($width -gt $maxWidth) {
        $ratio = $maxWidth / $width
        $newWidth = $maxWidth
        $newHeight = [int]($height * $ratio)
    } else {
        $newWidth = $width
        $newHeight = $height
    }

    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newWidth, $newHeight)

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageDecoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)

    $bmp.Save($dest, $codec, $encoderParams)

    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    Write-Host "Compressed $src to $dest"
}

# Helper to resize and save image as PNG (for transparency)
function Resize-Png-Image ($src, $dest, $maxWidth) {
    if (-not (Test-Path $src)) { 
        Write-Host "File not found: $src"
        return 
    }
    $img = [System.Drawing.Image]::FromFile($src)
    $width = $img.Width
    $height = $img.Height

    if ($width -gt $maxWidth) {
        $ratio = $maxWidth / $width
        $newWidth = $maxWidth
        $newHeight = [int]($height * $ratio)
    } else {
        $newWidth = $width
        $newHeight = $height
    }

    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newWidth, $newHeight)

    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    Write-Host "Resized PNG $src to $dest"
}

# 1. Optimize large assets
Compress-And-Resize-To-Jpeg "d:\RabeaShaban\src\Img\rabea.jpg" "d:\RabeaShaban\src\Img\rabea_temp.jpg" 500 75
if (Test-Path "d:\RabeaShaban\src\Img\rabea_temp.jpg") {
    Move-Item -Force "d:\RabeaShaban\src\Img\rabea_temp.jpg" "d:\RabeaShaban\src\Img\rabea.jpg"
}

Compress-And-Resize-To-Jpeg "d:\RabeaShaban\src\Img\Picsart_25-01-21_11-09-34-893.jpg" "d:\RabeaShaban\src\Img\Picsart_temp.jpg" 500 75
if (Test-Path "d:\RabeaShaban\src\Img\Picsart_temp.jpg") {
    Move-Item -Force "d:\RabeaShaban\src\Img\Picsart_temp.jpg" "d:\RabeaShaban\src\Img\Picsart_25-01-21_11-09-34-893.jpg"
}

Resize-Png-Image "d:\RabeaShaban\public\logo.png" "d:\RabeaShaban\public\logo_temp.png" 400
if (Test-Path "d:\RabeaShaban\public\logo_temp.png") {
    Move-Item -Force "d:\RabeaShaban\public\logo_temp.png" "d:\RabeaShaban\public\logo.png"
}

# 2. Optimize portfolio screenshots and convert to JPEGs
$screenshots = @(
    '365.png', 'AboRaslan.png', 'AlAmar.png', 'AlaYman.png', 'ALRamaADS.png',
    'ApiCountryImg.png', 'BasmatAlwafa.png', 'CarRent.png', 'HadayiqAlMarjan.png',
    'Kashf3laj.png', 'KayanGardens.png', 'Latest_Products.png', 'Programming.png',
    'SolidaritySolarImg.png', 'Spider-Man.png', 'TakseerSA.png', 'TaksirWatarmim.png',
    'TansiqGarden.png', 'TaskOenUpskilling.png', 'UMS.png'
)

foreach ($file in $screenshots) {
    $srcPath = "d:\RabeaShaban\src\Img\$file"
    if (Test-Path $srcPath) {
        $name = $file.Substring(0, $file.LastIndexOf('.'))
        $destPath = "d:\RabeaShaban\src\Img\$name.jpg"
        Compress-And-Resize-To-Jpeg $srcPath $destPath 800 80
        # Delete the old large PNG file
        Remove-Item $srcPath
    }
}

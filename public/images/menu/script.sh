find . -type f -name "*.jpg" -print0 | while IFS= read -r -d $'\0' file; do
    dir=$(dirname "$file")
    filename=$(basename "$file" .jpg)
    cwebp "$file" -o "${dir}/${filename}.webp"
done

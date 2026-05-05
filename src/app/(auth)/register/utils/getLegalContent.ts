import fs from 'fs';
import path from 'path';

export function getLegalContent(file: string) {
  const filePath = path.join(
    process.cwd(),
    'src/app/(auth)/register/content',
    file,
  );
  return fs.readFileSync(filePath, 'utf-8');
}

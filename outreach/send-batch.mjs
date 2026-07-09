import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const csvPath = resolve(__dirname, 'verified_valid_emails.csv');
const statusPath = resolve(__dirname, 'sent_status.json');
const outreachDir = resolve(__dirname, '..', 'marketing', 'email-outreach');

function parseCSV(path) {
  const text = readFileSync(path, 'utf8').trim();
  const lines = text.split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const vals = line.split(',');
    const row = {};
    headers.forEach((h, i) => { row[h.trim()] = (vals[i] || '').trim(); });
    return row;
  });
}

function loadStatus() {
  try { return JSON.parse(readFileSync(statusPath, 'utf8')); }
  catch { return {}; }
}

function saveStatus(status) {
  writeFileSync(statusPath, JSON.stringify(status, null, 2));
}

const leads = parseCSV(csvPath);
const status = loadStatus();

const batchNum = parseInt(process.argv[2]) || 1;
const totalBatches = 2;
const batchSize = Math.ceil(leads.length / totalBatches);
const start = (batchNum - 1) * batchSize;
const end = Math.min(start + batchSize, leads.length);
const batch = leads.slice(start, end);

console.log(`\nBatch ${batchNum}/${totalBatches} — ${batch.length} leads (${start + 1} to ${end} of ${leads.length})\n`);

let sent = 0;
let skipped = 0;

for (const lead of batch) {
  const email = lead.Email;
  const firstName = lead['First Name'] || 'there';
  const company = lead.Company || 'your brand';

  if (status[email] === 'sent') {
    console.log(`⏭️  ${email} — already sent`);
    skipped++;
    continue;
  }

  const subject = `sell more to Malayalees`;
  const text = `hi ${firstName}, we produce street interviews and activations that help brands reach the Malayalee community. real people, local accents, the kind of stuff that actually converts. based in Kochi and Bangalore. [https://www.instagram.com/yousaypeople/]

would ${company} be down for a test run?


Akhil MK
lisnagency.online
91-8893317488`;

  const escaped = text.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const cmd = `npm run send --prefix "${outreachDir}" -- --to "${email}" --subject "${subject}" --text "${escaped}" --from-name "Akhil MK" --reply-to akhil@workwithakhil.co`;

  try {
    execSync(cmd, { timeout: 30000, shell: true });
    status[email] = 'sent';
    status[`${email}_at`] = new Date().toISOString();
    saveStatus(status);
    console.log(`✅ ${email} — ${company}`);
    sent++;
  } catch (err) {
    console.log(`❌ ${email} — ${err.message.slice(0, 80)}`);
  }

  if (sent < batch.length) {
    process.stdout.write('   waiting 6s...');
    await new Promise(r => setTimeout(r, 6000));
  }
}

console.log(`\nBatch ${batchNum} done: ${sent} sent, ${skipped} skipped`);
console.log(`Run batch 2 in 24 hours: node outreach/send-batch.mjs 2`);
